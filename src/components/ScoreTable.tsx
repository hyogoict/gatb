import React from 'react';
import { Props } from 'types/sensei-web';
import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 90%;
  font-size: 1.2rem;
  margin: 10px;
`;

const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const ScoreTable= ({ effScores }: Props) => (
  <StyledTable>
    <thead>
      <StyledTr>
        <StyledTh></StyledTh>
        {Object.keys(effScores).map((key) => (
          <StyledTh key={key}>{key}</StyledTh>
        ))}
      </StyledTr>
    </thead>
    <tbody>
      <StyledTr>
        <StyledTd>適性能得点</StyledTd>
        {Object.values(effScores).map((value, index) => (
          <StyledTd key={index}>{value}</StyledTd>
        ))}
      </StyledTr>
      <StyledTr>
        <StyledTd>評価段階</StyledTd>
        {Object.values(effScores).map((value, index) => {
            let score = "";
            if (value < 75) {
              score = "E";
            } else if (value >= 75 && value < 90) {
              score = "D";
            } else if (value >= 90 && value < 100) {
              score = "C";
            } else if (value >= 100 && value < 110) {
              score = "©";
            } else if (value >= 110 && value < 125) {
              score = "B";
            } else if (value >= 125) {
              score = "A";
            }
            return (
              <StyledTd key={index}>
                {score}
              </StyledTd>
            );
          })}
      </StyledTr>
      <StyledTr>
        <StyledTd>（加算評価段階）</StyledTd>
        {Object.values(effScores).map((value, index) => {
          let addScore = ["G", "V", "N", "Q", "S", "P", "K"].includes(
            Object.keys(effScores)[index]
          )
            ? value + [8, 8, 8, 8, 10, 10, 10][["G", "V", "N", "Q", "S", "P", "K"].indexOf(Object.keys(effScores)[index])]
            : value;
          let score = "";
          if (addScore < 75) {
            score = "E";
          } else if (addScore >= 75 && addScore < 90) {
            score = "D";
          } else if (addScore >= 90 && addScore < 100) {
            score = "C";
          } else if (addScore >= 100 && addScore < 110) {
            score = "©";
          } else if (addScore >= 110 && addScore < 125) {
            score = "B";
          } else if (addScore >= 125) {
            score = "A";
          }
          return (
            <StyledTd key={index}>
              {score}
            </StyledTd>
          );
        })}
      </StyledTr>
    </tbody>
  </StyledTable>
);

export default ScoreTable