import { css } from '@emotion/css';

export const schematicWrapperStyles = css`
    --schematic-background-color: var(--dark-background);
    --schematic-dot-color: #434437;

    position: relative;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(var(--schematic-dot-color) 10%, var(--schematic-background-color) 10%);
    background-position: 0 0;
    background-size: 14px 14px;
    overflow: hidden;
`;
