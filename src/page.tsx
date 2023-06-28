import { FC, useCallback, useState } from "react";
import {Helmet} from "react-helmet"
import styled from 'styled-components';
import { convertScore } from './convertScore';
import { convertTableHs01 } from "./assets/convertTable/convertTableHs01";
import { convertTableHs02 } from "./assets/convertTable/convertTableHs02";
import { convertTableHs03 } from "./assets/convertTable/convertTableHs03";
import { convertTableHs04 } from "./assets/convertTable/convertTableHs04";
import { convertTableHs05 } from "./assets/convertTable/convertTableHs05";
import { convertTableHs06 } from "./assets/convertTable/convertTableHs06";
import { convertTableHs07 } from "./assets/convertTable/convertTableHs07";
import { convertTableHs08 } from "./assets/convertTable/convertTableHs08";
import { convertTableHs09G, convertTableHs09S } from "./assets/convertTable/convertTableHs09";
import { convertTableHs10G, convertTableHs10V } from "./assets/convertTable/convertTableHs10";
import { convertTableHs11G, convertTableHs11N } from "./assets/convertTable/convertTableHs11";
import ScoreTable from './components/ScoreTable';


const StyledDiv = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
const StyledInputForm = styled.div`
`;
const StyledLabel = styled.label`
  margin-right: 10px;
  width: 100px;
  display: inline-block;
`;
const StyledInput = styled.input`
  margin-bottom: 10px;
  width: calc(100% / 10);
  display: inline-block;
`;

export const Page: FC = () => {
  const [error, setError] = useState('');
  const [scores, setScores] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value > (index === 0 ? 180 : index === 1 ? 90 : index === 2 ? 36 : index === 3 ? 70 : index === 4 ? 24 : index === 5 ? 24 : index === 6 ? 30 : index === 7 ? 40 : index === 8 ? 28 : index === 9 ? 48 :  index === 10 ? 20 : '')) {
      setError('最大値を超えています');
      return;
    }
    setError('');
    const newScores = [...scores];
    let inputScore = Number(e.target.value);
    switch (index) {
      case 0:
        newScores[0] = convertScore(inputScore, convertTableHs01);
        break;
      case 1:
        newScores[1] = convertScore(inputScore, convertTableHs02);
        break;
      case 2:
        newScores[2] = convertScore(inputScore, convertTableHs03);
        break;
      case 3:
        newScores[3] = convertScore(inputScore, convertTableHs04);
        break;
      case 4:
        newScores[4] = convertScore(inputScore, convertTableHs05);
        break;
      case 5:
        newScores[5] = convertScore(inputScore, convertTableHs06);
        break;
      case 6:
        newScores[6] = convertScore(inputScore, convertTableHs07);
        break;
      case 7:
        newScores[7] = convertScore(inputScore, convertTableHs08);
        break;
      case 8:
        newScores[8] = convertScore(inputScore, convertTableHs09G);
        newScores[9] = convertScore(inputScore, convertTableHs09S);
        break;
      case 9:
        newScores[10] = convertScore(inputScore, convertTableHs10G);
        newScores[11] = convertScore(inputScore, convertTableHs10V);
        break;
      case 10:
        newScores[12] = convertScore(inputScore, convertTableHs11G);
        newScores[13] = convertScore(inputScore, convertTableHs11N);
        break;
      default:
        break;
    }
    setScores(newScores);
  };

  const effScores = {
    G: scores[8] + scores[10] + scores[12],
    V: scores[7] + scores[11],
    N: scores[6] + scores[13],
    Q: scores[3],
    S: scores[5] + scores[9],
    P: scores[2] + scores[4],
    K: scores[0] + scores[1],
  };

  return (
    <>
    <Helmet>
      <title>一般職業適性検査 結果記録表</title>
      <meta name="description" content="一般職業適性検査結果の整理換算評価" />
    </Helmet>
      <h2>一般職業適性検査 結果記録表</h2>
    <StyledDiv>
      {[...Array(11)].map((_, i) => (
      <>
        <StyledInputForm>
          <StyledLabel key={i} htmlFor={`input${i + 1}`}>
                {i === 0 && '検査１'}
                {i === 1 && '検査２'}
                {i === 2 && '検査３'}
                {i === 3 && '検査４'}
                {i === 4 && '検査５'}
                {i === 5 && '検査６'}
                {i === 6 && '検査７'}
                {i === 7 && '検査８'}
                {i === 8 && '検査９'}
                {i === 9 && '検査１０'}
                {i === 10 && '検査１１'}
          </StyledLabel>
          <StyledInput id={`input${i + 1}`} type="number"
            min="0" max={i === 0 ? 180 : i === 1 ? 90 : i === 2 ? 36 : i === 3 ? 70 : i === 4 ? 24 : i === 5 ? 24 : i === 6 ? 30 : i === 7 ? 40 : i === 8 ? 28 : i === 9 ? 48 :  i === 10 ? 20 : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, i)} />
          {/* TODO: 入力値エラーの表示 */}
          {/* {error && <p>{error}</p>} */}
        </StyledInputForm>
        </>
        ))}
    </StyledDiv>
      <ScoreTable effScores={effScores} />
    </>
  );
};