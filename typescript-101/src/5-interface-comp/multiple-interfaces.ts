class AC {
    a1: string = ''
    a2: string = ''
    a3: string = ''
  }
  
  class BC {
    b1: number = 0
    b2: number = 0
    b3: number = 0
  }
  
  // 要求一个接口要有 A 和 B 的所有成员
  
  interface EC extends AC, BC {}
  
  const moreC:EC = {
      a1: "",
      a2: "",
      a3: "",
      b1: 0,
      b2: 0,
      b3: 0,
  }