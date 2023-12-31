import { IPoint } from '../../../hooks/useCartesianMidpoint/useCartesianMidpoint.types';
import { IContextMenuItemProps } from '../ContextMenuItem/ContextMenuItem.types';

export interface IContextMenuContainerSection {
    title?: string;
    items: IContextMenuItemProps[];
}

export interface IContextMenuContainerProps {
    sections: IContextMenuContainerSection[];
    position?: IPoint;
    onClose?(): void;
}
