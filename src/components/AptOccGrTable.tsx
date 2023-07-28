import { PropsWithChildren } from 'react';
import { aptOccGr } from '../utils/data';
import styled from 'styled-components';
import { OccGr, Props } from 'types/sensei-web';
import { TdProps } from 'types/sensei-web';


const Table = styled.table`
  border-collapse: collapse;
  border: 2pix solid;
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

  // 適性職業群の番号と対応させるために最初の0番目は空
  const addScoreMatchCondition = [
    ,
    addScores.G < 90 || addScores.V < 75,
    addScores.K < 75,
    addScores.K < 75,
    addScores.P < 75,
    addScores.K < 75,
    addScores.P < 90 || addScores.K < 75,
    addScores.S < 75 || addScores.P < 75,
    addScores.S < 90 || addScores.P < 90,
    addScores.S < 90 || addScores.P < 90,
    addScores.N < 90 || addScores.S < 90 || addScores.P < 90,
    addScores.G < 90 || addScores.Q < 90,
    addScores.G < 90 || addScores.Q < 90,
    addScores.S < 75 || addScores.P < 75,
    addScores.G < 90 || addScores.Q < 90,
    addScores.G < 110 || addScores.N < 110 || addScores.S < 100,
    addScores.N < 90 || addScores.S < 90 || addScores.P < 90,
    addScores.G < 110 || addScores.N < 110 || addScores.S < 100,
    addScores.G < 125 || addScores.N < 125 || addScores.S < 100,
    addScores.G < 125 || addScores.N < 125 || addScores.S < 100,
    addScores.G < 125 || addScores.V < 125 || addScores.N < 100,
    addScores.G < 125 || addScores.V < 125 || addScores.N < 100,
    addScores.G < 100 || addScores.V < 100 || addScores.Q < 100,
    addScores.G < 110 || addScores.V < 110 || addScores.Q < 100,
    addScores.S < 90 || addScores.P < 90,
    addScores.G < 90 || addScores.Q < 90 || addScores.K < 90,
    addScores.G < 110 || addScores.V < 110 || addScores.Q < 100,
    addScores.G < 75,
    addScores.G < 100 ||  addScores.Q < 90,
    addScores.G < 110 || addScores.V < 100 || addScores.N < 100,
    addScores.G < 75 || addScores.N < 75 || addScores.Q < 75,
    addScores.S < 75 || addScores.P < 75,
    addScores.G < 75 || addScores.Q < 75,
    addScores.G < 110 || addScores.N < 100 || addScores.S < 100,
    addScores.G < 75 || addScores.Q < 75,
    addScores.G < 75 || addScores.Q < 90,
    addScores.Q < 75 || addScores.K < 75,
    addScores.G < 75 || addScores.Q < 90  || addScores.K < 90,
    addScores.G < 90 || addScores.V < 90  || addScores.Q < 90,
    addScores.G < 90 || addScores.N < 90  || addScores.Q < 100,
    addScores.G < 110 || addScores.V < 100  || addScores.N < 100,
  ]

  const aptScoreMatchCondition = [
    ,
    aptScores.G < 90 || aptScores.V < 75,
    aptScores.K < 75,
    aptScores.K < 75,
    aptScores.P < 75,
    aptScores.K < 75,
    aptScores.P < 90 || aptScores.K < 75,
    aptScores.S < 75 || aptScores.P < 75,
    aptScores.S < 90 || aptScores.P < 90,
    aptScores.S < 90 || aptScores.P < 90,
    aptScores.N < 90 || aptScores.S < 90 || aptScores.P < 90,
    aptScores.G < 90 || aptScores.Q < 90,
    aptScores.G < 90 || aptScores.Q < 90,
    aptScores.S < 75 || aptScores.P < 75,
    aptScores.G < 90 || aptScores.Q < 90,
    aptScores.G < 110 || aptScores.N < 110 || aptScores.S < 100,
    aptScores.N < 90 || aptScores.S < 90 || aptScores.P < 90,
    aptScores.G < 110 || aptScores.N < 110 || aptScores.S < 100,
    aptScores.G < 125 || aptScores.N < 125 || aptScores.S < 100,
    aptScores.G < 125 || aptScores.N < 125 || aptScores.S < 100,
    aptScores.G < 125 || aptScores.V < 125 || aptScores.N < 100,
    aptScores.G < 125 || aptScores.V < 125 || aptScores.N < 100,
    aptScores.G < 100 || aptScores.V < 100 || aptScores.Q < 100,
    aptScores.G < 110 || aptScores.V < 110 || aptScores.Q < 100,
    aptScores.S < 90 || aptScores.P < 90,
    aptScores.G < 90 || aptScores.Q < 90 || aptScores.K < 90,
    aptScores.G < 110 || aptScores.V < 110 || aptScores.Q < 100,
    aptScores.G < 75,
    aptScores.G < 100 || aptScores.Q < 90,
    aptScores.G < 110 || aptScores.V < 100 || aptScores.N < 100,
    aptScores.G < 75 || aptScores.N < 75 || aptScores.Q < 75,
    aptScores.S < 75 || aptScores.P < 75,
    aptScores.G < 75 || aptScores.Q < 75,
    aptScores.G < 110 || aptScores.N < 100 || aptScores.S < 100,
    aptScores.Q < 75 || aptScores.K < 75,
    aptScores.G < 75 || aptScores.Q < 90  || aptScores.K < 90,
    aptScores.G < 90 || aptScores.V < 90  || aptScores.Q < 90,
    aptScores.G < 90 || aptScores.N < 90  || aptScores.Q < 100,
    aptScores.G < 110 || aptScores.V < 100  || aptScores.N < 100,
  ]

  if ( addScoreMatchCondition[index]) {
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
        <tr>
          <Td rowSpan={4} >2 運搬,加工,組立の簡易技能</Td>
          <Td>{aptOccGr['3']}</Td>
          <Td>{matchAptitude(3, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['4']}</Td>
          <Td>{matchAptitude(4, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['5']}</Td>
          <Td>{matchAptitude(5, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['6']}</Td>
          <Td>{matchAptitude(6, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={4} >3 加工,組立,造形の熟練技能</Td>
          <Td>{aptOccGr['7']}</Td>
          <Td>{matchAptitude(7, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['8']}</Td>
          <Td>{matchAptitude(8, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['9']}</Td>
          <Td>{matchAptitude(9, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['10']}</Td>
          <Td>{matchAptitude(10, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={2} >4 保守管理</Td>
          <Td>{aptOccGr['11']}</Td>
          <Td>{matchAptitude(11, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['12']}</Td>
          <Td>{matchAptitude(12, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={3} >5 運転,操縦</Td>
          <Td>{aptOccGr['13']}</Td>
          <Td>{matchAptitude(13, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['14']}</Td>
          <Td>{matchAptitude(14, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['15']}</Td>
          <Td>{matchAptitude(15, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={2} >6 工学,技術</Td>
          <Td>{aptOccGr['16']}</Td>
          <Td>{matchAptitude(16, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['17']}</Td>
          <Td>{matchAptitude(17, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={4} >7 学術研究,医療,法務の熟練技能</Td>
          <Td>{aptOccGr['18']}</Td>
          <Td>{matchAptitude(18, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['19']}</Td>
          <Td>{matchAptitude(19, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['20']}</Td>
          <Td>{matchAptitude(20, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['21']}</Td>
          <Td>{matchAptitude(21 , { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={2} >8 教育関係</Td>
          <Td>{aptOccGr['22']}</Td>
          <Td>{matchAptitude(22, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['23']}</Td>
          <Td>{matchAptitude(23, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={3} >9 コミュニケーション</Td>
          <Td>{aptOccGr['24']}</Td>
          <Td>{matchAptitude(24, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['25']}</Td>
          <Td>{matchAptitude(25, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['26']}</Td>
          <Td>{matchAptitude(26, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={3} >10 社会福祉</Td>
          <Td>{aptOccGr['27']}</Td>
          <Td>{matchAptitude(27, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['28']}</Td>
          <Td>{matchAptitude(28, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['29']}</Td>
          <Td>{matchAptitude(29, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={4} >11 販売,サービス</Td>
          <Td>{aptOccGr['30']}</Td>
          <Td>{matchAptitude(30, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['31']}</Td>
          <Td>{matchAptitude(31, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['32']}</Td>
          <Td>{matchAptitude(32, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['33']}</Td>
          <Td>{matchAptitude(33 , { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={2} >12 警備,保安</Td>
          <Td>{aptOccGr['34']}</Td>
          <Td>{matchAptitude(34, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['35']}</Td>
          <Td>{matchAptitude(35, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td rowSpan={5} >13 事務関係</Td>
          <Td>{aptOccGr['36']}</Td>
          <Td>{matchAptitude(36, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['37']}</Td>
          <Td>{matchAptitude(37, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['38']}</Td>
          <Td>{matchAptitude(38, { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['39']}</Td>
          <Td>{matchAptitude(39 , { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>{aptOccGr['40']}</Td>
          <Td>{matchAptitude(40 , { addScores, aptScores })}</Td>
          <Td></Td>
        </tr>
        <tr></tr>
      </tbody>
    </Table>
  );
};

export default AptOccGrTable;