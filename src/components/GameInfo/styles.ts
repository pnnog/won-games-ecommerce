import styled, { css } from 'styled-components';
import * as HeadingStyles from 'components/Heading/styles';
import * as RibbonStyles from 'components/Ribbon/styles';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      flex-direction: row;
      
      height: 26rem;
      padding: ${theme.spacings.xlarge};
    `}

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }

    ${RibbonStyles.Wrapper} {
      ::before {
        border: none;
        font-size: ${theme.font.sizes.large};
      }
      ${media.lessThan('medium')`
        top: 3rem; 
        right: -1rem;
      `}

      ${media.greaterThan('medium')`
        top: 4.6rem;
        right: 4.6rem;
      `}
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row-reverse;
  `}
  button {
    width: 100%;

    ${media.greaterThan('medium')`
      width:initial;
    
  `}
  }
`;
