"use client"
import React, { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '../configs/db.js'; // Ensure db is properly imported
import { Users } from '../configs/schema.js'; // Ensure your Users schema is correctly imported
import { eq } from 'drizzle-orm';
function Provider({children}) {
    const {user}=useUser();
    useEffect(()=>{
        user&&isNewUser();
    },[user]);
    const isNewUser=async()=>{
        const result=await db.select().from(Users)
        .where(eq(Users.email,user?.primaryemailAddress?.emailAddress));
        console.log(result);
        if (!result[0]) {
            await db.insert(Users).values({
                name:user.fullName,
                email:user?.primaryemailAddress?.emailAddress,
                imageUrl:user?.imageUrl
            })
        }
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default Provider