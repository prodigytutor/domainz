import React from 'react';
import { createBoard } from '@wixc3/react-board';
import DashboardPage from '../../../../app/dashboard/page';

export default createBoard({
    name: 'DashboardPage',
    Board: () => <DashboardPage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 698
    }
});
