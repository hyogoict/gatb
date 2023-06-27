import { FC, useCallback, useState } from "react";
import {Helmet} from "react-helmet"
import styled from 'styled-components';
import { convertScore } from './convertScore';
import { convertTableHs01 } from "./assets/convertTable/convertTableHs01";
import { convertTableHs02 } from "./assets/convertTable/convertTableHs02";
import { convertTableHs03 } from "./assets/convertTable/convertTableHs03";

const StyledInput = styled.input`
  margin-bottom: 10px;
  width: calc(100% / 11);
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Page: FC = () => {
  const [scores, setScores] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newScores = [...scores];
    newScores[index] = Number(e.target.value);
    switch (index) {
      case 0:
        newScores[0] = convertScore(newScores[0], convertTableHs01);
        break;
      case 1:
        newScores[1] = convertScore(newScores[1], convertTableHs02);
        break;
      case 2:
        newScores[2] = convertScore(newScores[2], convertTableHs03);
        break;
      // case 3:
      //   newScores[3] = convertScore(newScores[3], convertTableHs04);
      //   break;
      // case 4:
      //   newScores[4] = convertScore(newScores[4], convertTableHs05);
      //   break;
      // case 5:
      //   newScores[5] = convertScore(newScores[5], convertTableHs06);
      //   break;
      // case 6:
      //   newScores[6] = convertScore(newScores[6], convertTableHs07);
      //   break;
      // case 7:
      //   newScores[7] = convertScore(newScores[7], convertTableHs08);
      //   break;
      // case 8:
      //   newScores[8] = convertScore(newScores[8], convertTableHs09);
      //   break;
      // case 9:
      //   newScores[9] = convertScore(newScores[9], convertTableHs10);
      //   break;
      // case 10:
      //   newScores[10] = convertScore(newScores[10], convertTableHs11);
      //   break;
      default:
        break;
    }
    setScores(newScores);
  };

  const result = [
    scores[8] + scores[9] + scores[10],
    scores[7] + scores[9],
    scores[6] + scores[10],
    scores[3],
    scores[5] + scores[8],
    scores[2] + scores[4],
    scores[0] + scores[1],
  ];

  return (
    <>
    <Helmet>
      <title>一般職業適性検査 結果記録表</title>
      <meta name="description" content="一般職業適性検査結果の整理換算評価" />
    </Helmet>
    <StyledDiv>
      {[...Array(11)].map((_, i) => (
        <StyledInput key={i} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, i)} />
      ))}
    </StyledDiv>
      <div>{result.join(', ')}</div>
    </>
  );
};