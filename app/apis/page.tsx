import DashboardRow from '@/components/dashboard/DashboardRow';
import prisma from '../../lib/prisma'
import { title } from "@/components/primitives";

export default function DashboardPage() {
	return (
		<div>
			<h1 className={title()}>APIs</h1>
           
		</div>
	);
}
