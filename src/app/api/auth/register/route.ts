import User from "../../../../models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  // мой метод
  // try {
  //   await newUser.save();
  //   return NextResponse.json({
  //     message: 'User has been created!'
  //   })
  // } catch (error) {
  //   // degug error
  //   console.log('error', error);
  //   return NextResponse.json(error, {
  //     status: 500
  //   })
  // }

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};








