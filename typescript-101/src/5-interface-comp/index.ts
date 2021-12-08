import { Animal, Dog, Lion, Monkey, Tiger } from "./interfaces-impl";
import { IFireShow, IWisdonShow } from "./interfaces-all";

const animals: Animal[] = [
    new Lion('王富贵', 12),
    new Tiger('困困', 21),
    new Monkey('小六', 1),
    new Dog('旺财', 3),
    new Dog('狗剩', 5),
]
function hasIFireShow(obj: object): boolean {
    if ((obj as IFireShow).singFile && (obj as IFireShow).doubleFile) {
        return true
    }
    return false
}


animals.forEach(a => {
    if (hasIFireShow(a)) {
        a.singFile()
        a.doubleFile()
    }
})


function hasIWisdonShow(obj: object):obj is IWisdonShow{
    if((obj as IWisdonShow).suanshuiti && (obj as IWisdonShow).dance){
      return true
    }
    return false
}  

// 3. 所有会进行智慧表演的动物进行表演
animals.forEach(a => {
    if (hasIWisdonShow(a)) {
      a.suanshuiti()
      a.dance()
    }
  })