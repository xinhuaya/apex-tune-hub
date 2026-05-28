import { getDb } from '@/db';
import { sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type HealthCheck = 'ok' | 'missing' | 'error';

function envStatus(name: string): HealthCheck {
  return process.env[name] ? 'ok' : 'missing';
}

export async function GET() {
  const checks: Record<string, HealthCheck> = {
    baseUrl: envStatus('NEXT_PUBLIC_BASE_URL'),
    authSecret: envStatus('BETTER_AUTH_SECRET'),
    database: 'missing',
    newsletter: envStatus('RESEND_API_KEY'),
    paymentProvider: envStatus('NEXT_PUBLIC_PAYMENT_PROVIDER'),
  };

  if (process.env.DATABASE_URL) {
    try {
      const db = await getDb();
      await db.execute(sql`select 1`);
      checks.database = 'ok';
    } catch (error) {
      console.error('Health check database probe failed', error);
      checks.database = 'error';
    }
  }

  const status =
    checks.database === 'ok' &&
    checks.baseUrl === 'ok' &&
    checks.authSecret === 'ok'
      ? 'ok'
      : 'degraded';

  return NextResponse.json(
    {
      status,
      service: 'apex-tune-hub',
      checkedAt: new Date().toISOString(),
      checks,
    },
    {
      status: status === 'ok' ? 200 : 503,
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}
