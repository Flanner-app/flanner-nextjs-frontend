import jwt from 'jsonwebtoken'
import { type NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function GET(req: NextApiRequest) {
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  if (!token) {
    return NextResponse.json({ message: 'No JWT token' }, { status: 403 })
  }

  try {
    const signedToken = jwt.sign(
      { ...token },
      process.env.NEXTAUTH_SECRET as string,
      {
        algorithm: 'HS256',
      },
    )
    const userRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${signedToken}`,
      },
    }).then((data) => data.json())

    return NextResponse.json(userRes, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(error, { status: 500 })
  }
}
