export class Hero {
    id: string
    name: string
    alterEgo: string
    likes: number
    default: boolean
    avatarUrl: string
    avatarBlurredUrl: string
    avatarThumbnailUrl: string

    constructor(hero: any = {}) {
        this.id = hero.id
        this.name = hero.name || ''
        this.alterEgo = hero.alterEgo || ''
        this.likes = hero.likes || 0
        this.default = hero.default || false
        this.avatarUrl = hero.avatarUrl
        this.avatarBlurredUrl = hero.avatarBlurredUrl || ''
        this.avatarThumbnailUrl = hero.avatarThumbnailUrl || ''

    }
}

export const NameI18n: any = {
  CN: {
    AltriaPendragon: "阿爾托利雅·潘德拉貢",
    Scathach: "斯卡哈",
    Astolfo: "阿斯托爾福",
    Emiya: "衛宮",
    ZhugeKongming: "諸葛孔明",
    RaikouMinamotono: "源賴光",
    SoujiOkita: "沖田總司",
    JeannedArc: "貞德Alter",
    LiShuwen: "李書文"
  },
  EN: {    
    AltriaPendragon: "Altria Pendragon",
    Scathach: "Scathach",
    Astolfo: "Astolfo",
    Emiya: "Emiya",
    ZhugeKongming: "Zhuge Kongming",
    RaikouMinamotono: "Raikou Minamotono",
    SoujiOkita: "Souji Okita",
    JeannedArc: "Jeanne d\'Arc",
    LiShuwen: "Li Shuwen"
  }
}

export const HeroList: Hero[] = [{
    id: '1',
    name: 'redarcher',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2TffX88afy18_22kcCx1F5X5t4eCB9q9sg&usqp=CAU',
    alterEgo : '',
    likes :  0,
    default : true,    
    avatarBlurredUrl : '',
    avatarThumbnailUrl :'',
  },{
    id: '2',
    name: 'bluesaber',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2TffX88afy18_22kcCx1F5X5t4eCB9q9sg&usqp=CAU',
    alterEgo : '',
    likes :  0,
    default : true,    
    avatarBlurredUrl : '',
    avatarThumbnailUrl :'',
  }
]
