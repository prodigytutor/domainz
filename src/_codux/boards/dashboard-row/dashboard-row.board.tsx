import React from 'react';
import { createBoard } from '@wixc3/react-board';
import DashboardRow from '../../../../components/dashboard/DashboardRow';

export default createBoard({
    name: 'DashboardRow',
    Board: () => <DashboardRow />,
    isSnippet: true,
});
