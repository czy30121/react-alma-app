import * as React from 'react';

import { Icon } from '../Icon/Icon';
import { Tooltip } from '../Tooltip/Tooltip';
import { TooltipPosition } from '../Tooltip/Tooltip.types';
import { toolbarItemWrapperStyles, toolbarItemContainerStyles } from './ToolbarItem.styles';
import { IToolbarItemProps } from './ToolbarItem.types';

export const ToolbarItem = ({ label, icon, onClick, outlined, cta }: IToolbarItemProps) => {
    return (
        <Tooltip
            className={toolbarItemWrapperStyles(cta)}
            text={label}
            position={TooltipPosition.TOP}
            offset={{ y: 5, x: 0 }}
        >
            <div className={toolbarItemContainerStyles(cta)} onClick={onClick} role="button">
                <Icon name={icon} outlined={outlined} size={20} />
            </div>
        </Tooltip>
    );
};
