declare namespace ParameterSettings {
    type ValueType = 'assumption' | 'design' //'推估值' | '設計值'
    type Field = {
        value: number
        type: ValueType
    }
    type ParameterSettingsData = {
        buildingWeight: BuildingWeightInput
        materialParameters: MaterialParametersInput
    }

    /**
     * 表一、建築物重量
     */
    type BuildingWeightInput = {
        W1_D: Field //2樓~j樓之樓地板單位面積「靜載重」(tf/m^2)
        W1_L: Field //2樓~j樓之樓地板單位面積「活載重」(tf/m^2)
        A1: Field //2樓~j樓之總樓地板面積(m^2)
        W2_D: Field //(j+1)樓~k樓之樓地板單位面積「靜載重」(tf/m^2)
        W2_L: Field //(j+1)樓~k樓之樓地板單位面積「活載重」(tf/m^2)
        A2: Field //(j+1)樓~k樓之總樓地板面積(m^2)
        W3_D: Field //(k+1)樓~屋頂之樓地板單位面積「靜載重」(tf/m^2)
        W3_L: Field //(k+1)樓~屋頂之樓地板單位面積「活載重」(tf/m^2)
        A3: Field //(k+1)樓~屋頂之總樓地板面積(m^2)
    }
    type BuildingWeightOutput = {
        W_D: Field //建築物靜載重
        W: Field //建築物總載重
    }

    /**
     * 表二、材料參數
     */
    type MaterialParametersInput = {
        C_fc: Field //柱 混凝土抗壓強度
        C_fy: Field //柱 主筋降伏強度
        C_fyv: Field //柱 箍筋降伏強度
        C_c: Field //柱 保護層厚度
        RCW_fc: Field //RC牆 混凝土抗壓強度
        RCW_fy: Field //RC牆 主筋降伏強度
        Fmc: Field //磚牆 砂漿抗壓強度
        Fbc: Field //磚牆 紅磚抗壓強度
    }
    type MaterialParametersOutput = {
        // NONE
    }
}
