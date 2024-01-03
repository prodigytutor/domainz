import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'

export async function GET() {
    const posts = await prisma.domains.findMany({
       where: { workspaceId: '1' }, });

    return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { Id, workspaceId,addedById ,name, registrar, regCost, regDate, renCost, renDate, providerId} = body;

  const newDomain = await prisma.domains.create({
    data: {     
      id: Id,      
      workspaceId: workspaceId,
      addedById: addedById,
      name:name,        
      createdAt: new Date().toString(),
      registrar: registrar,     
      reg_date: regDate,    
      ren_date: renDate,    
      reg_cost: regCost,    
      ren_cost: renCost,    
      providerId: providerId,  

    },
  });
  return NextResponse.json({"success":1,"message":"create success","post":newPost});
}
