type color = "♥" | "♠" | "♣" | "♦";
// 单张扑克牌约束
type NormaCard = {
    color: color
    mark: number
}

// 扑克牌集合约束
type Deck = Array<NormaCard>; // NormaCard[]

// 创建扑克牌方法 
function createDeck(): Deck {
    const deck: Deck = []
    for (let i = 1; i < 14; i++) {

        deck.push({
            mark: i,
            color: '♠'
        })
        deck.push({
            mark: i,
            color: '♣'
        })
        deck.push({
            mark: i,
            color: '♥'
        })
        deck.push({
            mark: i,
            color: '♦'
        })
    }
    return deck
}
// 打印扑克牌
function printDeck(deck: Deck) {
    deck.forEach(card => {
        console.log(`card: ${card.color} ${card.mark}`)
    })
}

// 查询某个花色的扑克牌
function findCrads(color: color): NormaCard[] {
  return  deck.filter((card) => {
          card.color == color;
      })
}


const deck = createDeck()
printDeck(deck)
console.log(findCrads('♦'))