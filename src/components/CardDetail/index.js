import React from 'react';
import Card from 'components/Card';
import { 
  CardDetailWrapper,
  CardDetailHeader,
  CardDetailH2,
  CardDetailContent,
  CardDetailTopContent,
  CardDetailInformation,
  CardDetailStats,
  CardDetailStatsList,
  CardDetailStatsListText,
  CardDetailStatsListPlaceholder,
  CardDetailStatsListBar,
  CardDetailType,
  CardDetailTypeList,
  CardDetailTypeListText,
  CardDetailMoves,
  CardDetailMovesHeader,
  CardDetailMoveslistWrapper,
  CardDetailMovesList,
  CardDetailMovesNum,
  CardDetailMovesName 
} from './cardDetail.element';
import { type_colors } from 'config/styles/globalStyles';

const CardDetail = ({ 
  styledBgHeader,
  styledBgHeaderMoves,
  styledBgBar,
  name, 
  img, 
  type,
  moves,
  hp,
  attack,
  def,
  spAtt,
  spDef,
  speed,
  id,
  children
}) => {

  // ================================================================
  // START CARD HEADER RENDER
  // ================================================================

  const CardHeader = () => {
    return (
      <CardDetailHeader style={styledBgHeader}>
        <CardDetailH2>{name}</CardDetailH2>
      </CardDetailHeader>
    )
  };
  // ================================================================
  // END CARD HEADER RENDER
  // ================================================================

  // ================================================================
  // START CARD TOP CONTENT RENDER
  // ================================================================
  const CardTopContent = () => {
    return (
      <CardDetailTopContent>
        <Card variant='details' img={img} detail/>
        <CardDetailInformation>
          <CardDetailType>
            {type.map((val, idx) => (
              <CardDetailTypeList key={idx}>
                <CardDetailTypeListText style={{
                  backgroundColor: `#${type_colors[val]}`
                }}>
                  {val}
                </CardDetailTypeListText>
              </CardDetailTypeList>
            ))}
          </CardDetailType>
          <CardDetailStats>
            <CardDetailStatsList>
              <CardDetailStatsListText>HP: </CardDetailStatsListText>
              <CardDetailStatsListPlaceholder>
                <CardDetailStatsListBar style={{
                  width: `${hp}%`
                }}>
                  {hp}
                </CardDetailStatsListBar>
              </CardDetailStatsListPlaceholder>
            </CardDetailStatsList>
            <CardDetailStatsList>
              <CardDetailStatsListText>Attack: </CardDetailStatsListText>
              <CardDetailStatsListPlaceholder>
                <CardDetailStatsListBar style={{
                  width: `${attack}%`
                }}>
                  {attack}
                </CardDetailStatsListBar>
              </CardDetailStatsListPlaceholder>
            </CardDetailStatsList>
            <CardDetailStatsList>
              <CardDetailStatsListText>Defense: </CardDetailStatsListText>
              <CardDetailStatsListPlaceholder>
                <CardDetailStatsListBar style={{
                  width: `${def}%`
                }}>
                  {def}
                </CardDetailStatsListBar>
              </CardDetailStatsListPlaceholder>
            </CardDetailStatsList>
            <CardDetailStatsList>
              <CardDetailStatsListText>Special Attack: </CardDetailStatsListText>
              <CardDetailStatsListPlaceholder>
                <CardDetailStatsListBar style={{
                  width: `${spAtt}%`
                }}>
                  {spAtt}
                </CardDetailStatsListBar>
              </CardDetailStatsListPlaceholder>
            </CardDetailStatsList>
            <CardDetailStatsList>
              <CardDetailStatsListText>Special Defense: </CardDetailStatsListText>
              <CardDetailStatsListPlaceholder>
                <CardDetailStatsListBar style={{
                  width: `${spDef}%`
                }}>
                  {spDef}
                </CardDetailStatsListBar>
              </CardDetailStatsListPlaceholder>
            </CardDetailStatsList>
            <CardDetailStatsList>
              <CardDetailStatsListText>Speed: </CardDetailStatsListText>
              <CardDetailStatsListPlaceholder>
                <CardDetailStatsListBar style={{
                  width: `${speed}%`
                }}>
                  {speed}
                </CardDetailStatsListBar>
              </CardDetailStatsListPlaceholder>
            </CardDetailStatsList>
          </CardDetailStats>
        </CardDetailInformation>
      </CardDetailTopContent>
    )
  };

  // ================================================================
  // END CARD TOP CONTENT RENDER
  // ================================================================

  // ================================================================
  // START CARD BOTTOM CONTENT RENDER
  // ================================================================
  const CardBottomContent = () => {
    return (
      <CardDetailMoves>
        <CardDetailMovesHeader style={styledBgHeaderMoves}>
          <h2 style={{margin: 0}}>Moves List</h2>
        </CardDetailMovesHeader>
        <CardDetailMoveslistWrapper>
          {moves.map((val, idx) => (
            <CardDetailMovesList key={idx}>
              <CardDetailMovesNum>{idx + ``}</CardDetailMovesNum>
              <CardDetailMovesName>{val}</CardDetailMovesName>
            </CardDetailMovesList>
          ))}
        </CardDetailMoveslistWrapper>
      </CardDetailMoves>
    )
  }
  // ================================================================
  // END CARD BOTTOM CONTENT RENDER
  // ================================================================
  return (
    <CardDetailWrapper id={id}>
      <CardHeader />
      <CardDetailContent>
        <CardTopContent />
        <CardBottomContent />
        {children}
      </CardDetailContent>
    </CardDetailWrapper>
  )
};

export default CardDetail;