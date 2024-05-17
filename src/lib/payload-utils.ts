import { User } from '../payload-types'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
) => {
  const token = cookies.get('payload-token')?.value
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`;

  try {
    console.log('Fetching user from URL:', url);  // Log the full URL

    const meRes = await fetch(url, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    if (!meRes.ok) {
      throw new Error(`HTTP error! status: ${meRes.status}`);
    }

    const { user } = (await meRes.json()) as {
      user: User | null
    };

    return { user };
  } catch (error) {
    console.error('Error fetching user:', error);
    return { user: null };
  }
}

