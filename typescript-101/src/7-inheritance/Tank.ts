class Tank {
    x: number = 0
    y: number = 0
    // shoot(): void {
    //   console.log('发射子弹')
    // }
}
class PlayerTank extends Tank {
    // 属性重写
    x: number = 20
    y: number = 10
    shoot(): void {
      console.log('发射2个子弹')
    }
}

class EnemyTank extends Tank {

}

const pTANK:Tank = new PlayerTank()
// pTANK.shoot()  //ERROR HERE
const p2:PlayerTank = new PlayerTank()