import { PropsWithChildren } from 'react';
import { aptOccGr } from '../utils/data';
import styled from 'styled-components';
import { OccGr, Props } from 'types/sensei-web';
import { TdProps } from 'types/sensei-web';


const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  font-size: 0.9rem;
  text-align: left;
`;

const Th = styled.th`
  padding: 0.5rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
`;

const Td = styled.td<TdProps>`
  padding: 0.5rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  rowSpan: ${(props) => props.rowSpan || '0'};
`;



const matchAptitude = ( index :number, {addScores, aptScores}: Props ) => {
  console.log("addScores", addScores);
  console.log("aptScores", aptScores);

  const addScoreMatchCondition = [
    ,
    addScores.G < 90 || addScores.V < 75,
    addScores.K < 75,
  ]

  const aptScoreMatchCondition = [
    ,
    aptScores.G < 90 || aptScores.V < 75,
    aptScores.K < 75,
  ]

  if ( addScoreMatchCondition[index]) {
    // TODO: fix inapproriate return
    return "L"
  } else if( aptScoreMatchCondition[index] ) {
    return "m"
  } else {
    return "H"
  }
}

const AptOccGrTable = ({ aptScores, addScores }: Props) => {  

  return (
    <Table>
      <thead>
        <tr>
          <Th>職業領域</Th>
          <Th>適正職業群</Th>
          <Th>照合結果</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td rowSpan={2} >1 農林漁業</Td>
          <Td>{aptOccGr['1']}</Td>
          <Td>{matchAptitude(1, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['2']}</Td>
          <Td>{matchAptitude(2, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AptOccGrTable;