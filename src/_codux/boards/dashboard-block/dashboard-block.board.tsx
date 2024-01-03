import React from 'react';
import { createBoard } from '@wixc3/react-board';
import DashboardBlock from '../../../../components/dashboard/DashboardBlock';

export default createBoard({
    name: 'DashboardBlock',
    Board: () => <DashboardBlock />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 2,
            left: 2,
            bottom: 2,
            right: 2
        },
        canvasBackgroundColor: '#f7f8f8'
    }
});
