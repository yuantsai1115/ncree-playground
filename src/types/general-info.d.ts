declare namespace GeneralInfo {
    type DesignYearType = '63年2月以前' | '63年2月至71年6月' | '71年6月至86年5月' | '86年5月以後'
    type BuildingStoreyType = '五樓以下' | '六樓以上'
    type BuildingStructuralType = '一般RC建物' | '加強磚造（透天厝）' | '其他'
    type BuildingUsageType = '辦公室' | '公寓' | '集合住宅' | '商場' | '住商混合' | '其他'
    type AssessmentReferenceType = '設計圖說' | '計算書' | '現場調查或推估'
    type GroundType = '第一類地盤' | '第二類地盤' | '第三類地盤' | '台北盆地'

    type GeneralInfoInput = {
        buildingName: string // 建物名稱
        buildingNo: string // 建物編號
        address: string // 地址 TODO: 拆分成縣市、鄉鎮、村里、路段、巷弄、號...在儲存於這個物件
        assessor: string // 評估者
        assessmentDate: string // 評估日期
        email: string
        designYear: DesignYearType | undefined // 設計年度
        buildingHeight: number // 建物高度
        usageFactor: number // 用途係數
        groundType: GroundType | undefined // 地盤種類
        numberOfStoreys: number // 地上樓層數
        numberOfBasements: number // 地下樓層數
        buildingStoreyType: BuildingStoreyType | undefined // 建築物依樓層分類
        buildingStructuralType: BuildingStructuralType | undefined // 建築物依結構型式分類
        buildingUsageType: BuildingUsageType | undefined // 建築物依使用用途分類
        assessmentReference: AssessmentReferenceType | undefined // 本評估參考資料

        // TODO: 地址細項，這個物件應該是由地址查表得知
        address_city?: string // 縣市
        address_district?: string // 區
        address_village?: string // 里
        address_road?: string // 路段
        address_lane?: string // 巷弄
        address_no?: string // 號
        address_floor?: string // 樓
        address_room?: string // 室
        address_crack?: string //斷層
        ductilityCapacityX?: number // 韌性容量(X向)
        ductilityCapacityY?: number // 韌性容量(Y向)

        // 以下四項資訊皆由地址查表得知，未來須由使用者填寫的地址自動帶入數值
        S_aD: number // 工址設計水平譜加速度係數
        S_DS: number // 工址短週期設計水平譜加速度係數
        S_MS: number // 工址短週期最大考量水平譜加速度係數
        T0_D: number // 工址設計水平加速度反應譜短週期與中、長週
    }
}
