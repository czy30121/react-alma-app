import { css } from '@emotion/css';

export const welcomeModalContentStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 32px 0 0;
    line-height: 1.6em;
`;

export const welcomeModalContentTitleStyles = css`
    color: var(--text-light-color);
    font-weight: 500;
    padding-top: 24px;
`;

export const onboardingModalContentStyles = css`
    display: flex;
    flex-direction: column;
    line-height: 1.6em;
`;

export const onboardingModalImageStyles = (url: string) => css`
    border-radius: 16px;
    border: 1px solid var(--border-color);
    background-color: var(--dark-background);
    background-image: url(${url});
    background-size: cover;
    background-position: center center;
    height: 300px;
    width: 100%;
`;

export const onboardingModalContentHeadingStyles = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
`;

export const onboardingModalContentTitleStyles = css`
    color: var(--text-light-color);
    font-weight: 500;
    padding-left: 12px;
`;
