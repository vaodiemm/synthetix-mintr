import React from 'react';
import styled from 'styled-components';

import { SlidePage } from '../../../components/ScreenSlider';
import TransactionPriceIndicator from '../../../components/TransactionPriceIndicator';
import {
  ButtonPrimary,
  ButtonTertiary,
  ButtonMax,
} from '../../../components/Button';
import { PLarge, H1 } from '../../../components/Typography';
import Input from '../../../components/Input';

const Action = ({
  onDestroy,
  onMint,
  issuableSynths,
  mintAmount,
  setMintAmount,
}) => {
  return (
    <SlidePage>
      <Container>
        <Navigation>
          <ButtonTertiary onClick={onDestroy}>Cancel</ButtonTertiary>
        </Navigation>
        <Top>
          <Intro>
            <ActionImage src="/images/actions/mint.svg" big />
            <H1>MINT</H1>
            <PLarge>
              Minting sUSD will lock your SNX, increasing your collateralization
              ratio, and will allow you to begin earning fees if you choose to
              sell your sUSD.
            </PLarge>
          </Intro>
          <Form>
            <PLarge>Confirm or enter amount to mint:</PLarge>
            <Input
              singleSynth={'sUSD'}
              onChange={e => setMintAmount(e.target.value)}
              value={mintAmount}
              placeholder="0.00"
              leftComponent={
                <Type>
                  <img
                    src="/images/currencies/sUSD.svg"
                    height="24px"
                    style={{ marginRight: '8px' }}
                  />
                  <PLarge>sUSD</PLarge>
                </Type>
              }
              rightComponent={
                <ButtonMax
                  onClick={() => {
                    setMintAmount(issuableSynths);
                  }}
                />
              }
            />
          </Form>
        </Top>
        <Bottom>
          <TransactionPriceIndicator />
          <ButtonPrimary onClick={onMint} margin="auto">
            MINT NOW
          </ButtonPrimary>
        </Bottom>
      </Container>
    </SlidePage>
  );
};

const Container = styled.div`
  width: 100%;
  height: 850px;
  max-width: 720px;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${props => props.theme.colorStyles.panels};
  border: 1px solid ${props => props.theme.colorStyles.borders};
  border-radius: 5px;
  box-shadow: 0px 5px 10px 5px ${props => props.theme.colorStyles.shadow1};
  margin-bottom: 20px;
  padding: 40px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;

const Top = styled.div`
  height: auto;
`;

const Bottom = styled.div`
  height: auto;
  margin-bottom: 64px;
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
`;

const Intro = styled.div`
  max-width: 380px;
  margin-bottom: 64px;
`;

const ActionImage = styled.img`
  height: ${props => (props.big ? '64px' : '48px')};
  width: ${props => (props.big ? '64px' : '48px')};
  margin-bottom: 8px;
`;

const Form = styled.div`
  margin: 0px 0px 80px 0px;
`;

const Type = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  justify-content: space-between;
`;

export default Action;