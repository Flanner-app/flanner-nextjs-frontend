import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

export async function GET() {
  const session = await getServerSession()

  if (!session) {
    return NextResponse.json(
      { status: 307 },
      {
        status: 307,
      },
    )
  }

  try {
    const signedToken = jwt.sign(
      { ...session.user },
      process.env.NEXTAUTH_SECRET as string,
      {
        algorithm: 'HS256',
      },
    )

    const userRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${signedToken}`,
        },
      },
    )
      .then((data) => data.json())
      .catch((e) => {
        console.log(e)
        return { data: undefined }
      })

    if (!userRes.data) {
      return NextResponse.json(
        {},
        {
          status: 404,
        },
      )
    }

    return NextResponse.json({ data: userRes.data }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(error, { status: 500 })
  }
}
