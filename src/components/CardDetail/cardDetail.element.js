import styled from "@emotion/styled";
import { desktopScreen } from "config/styles/globalStyles";

export const CardDetailWrapper = styled.div`
  width: 100%;
  margin: 24px 0;
  display: table;
  background-color: white;
`

export const CardDetailHeader = styled.div`
  display: table;
  width: 100%;
  height: 50px;
  padding: 0 24px;
  background-color: #ebeae8;
`
export const CardDetailH2 = styled.h2`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  text-transform: capitalize;
`
export const CardDetailContent = styled.div``

export const CardDetailTopContent = styled.div`
  display: table;
  width: 100%;
`

export const CardDetailInformation = styled.div`
  display: inline-block;
  width: 100%;
  ${desktopScreen} {
    display: table-cell;
    vertical-align: middle;
    width: 450px;
  }
`

export const CardDetailStats = styled.ul`
  padding: 12px;
`

export const CardDetailStatsList = styled.li``

export const CardDetailStatsListText = styled.p`
  display: inline-block;
  width: 100px;
  font-size: 12px;
  font-weight: 400;
`

export const CardDetailStatsListPlaceholder = styled.div`
  display: inline-block;
  background-color: #ebeae8;
  margin-bottom: 12px;
  border-radius: 20px;
  width: 100%;
  height: 20px;
`

export const CardDetailStatsListBar = styled.div`
  background-color: green;
  text-align: center;
  color: white;
  border-radius: 20px;
  height: 20px;
`

export const CardDetailType = styled.ul`
  padding: 12px;
`

export const CardDetailTypeList = styled.li`
  margin-right: 12px;
  display: inline-block;
`

export const CardDetailTypeListText = styled.p`
  text-transform: uppercase;
  color: #fff;
  padding: 4px 12px;
  margin-bottom: 12px;
  display: block;
`

export const CardDetailMoves = styled.div`
  height: 300px;
  overflow: hidden;
  overflow-y: scroll;
`

export const CardDetailMovesHeader = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 24px;
  text-align: center;
  padding: 16px 0;
  margin-bottom: 0;
`

export const CardDetailMoveslistWrapper = styled.ul`
  padding: 16px 24px;
`

export const CardDetailMovesList = styled.li``

export const CardDetailMovesNum = styled.span`
  font-size: 16px;
  display: inline-block;
  width: 70px;
`
export const CardDetailMovesName = styled.p`
  display: inline-block;
  font-size: 16px;
  text-transform: capitalize;
`