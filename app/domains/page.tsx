import DashboardRow from '@/components/dashboard/DashboardRow';
import React from "react";
import prisma from '../../lib/prisma'
import { title } from "@/components/primitives";
import { domains } from '@prisma/client';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";

const statusColorMap = {
	active: "success",
	paused: "danger",
	vacation: "warning",
  };
interface GetStaticProps
{domain: domains[]}
export const getStaticProps: GetStaticProps = async () => {
	const domains = await prisma.domains.findMany({
	  where: { workspaceId: "1" },});
	return {
	  props: { domains },
	  revalidate: 10,
	};
  };

  
export default function DomainPage(getStaticProps: domains) {
	const renderCell = React.useCallback((domain: domains, columnKey: string) => {
		const cellValue = domain[columnKey];
	
	 
		switch (columnKey) {
		  case "name":
			return (
			  <User
				avatarProps={{radius: "lg", src: domain.name}}
				description={domain.name}
				name={cellValue}
			  >
				{domain.name}
			  </User>
			);
		  case "role":
			return (
			  <div className="flex flex-col">
				<p className="text-bold text-sm capitalize">{cellValue}</p>
				<p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
			  </div>
			);
		  case "status":
			return (
			  <Chip className="capitalize" color={statusColorMap[domain.status]} size="sm" variant="flat">
				{cellValue}
			  </Chip>
			);
		  case "actions":
			return (
			  <div className="relative flex items-center gap-2">
				<Tooltip content="Details">
				  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
					View
				  </span>
				</Tooltip>
				<Tooltip content="Edit user">
				  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
					Edit
				  </span>
				</Tooltip>
				<Tooltip color="danger" content="Delete user">
				  <span className="text-lg text-danger cursor-pointer active:opacity-50">
					Delete
				  </span>
				</Tooltip>
			  </div>
			);
		  default:
			return cellValue;
		}
	  }, []);
	return (
		<div>
			<h1 className={title()}>Domains</h1>
			<Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
		      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

		</div>
	);
}
