declare namespace QualitativeAssessment {
    type ConditionType = 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Critical'
    type WallIntegrityType = 'High' | 'Medium' | 'Low'
    type ElectricalSystemType = 'Modern' | 'Updated' | 'Outdated' | 'Hazardous'
    type SeismicPerformanceLevel = '單跨' | '雙跨' | '三跨' | '四跨以上'
    type SymmetryType = '不良' | '尚可' | '良'
    type SignificanceType = '高' | '中' | '低' | '無'
    type DetailAssessmentType = '63年2月以前' | '63年2月至71年6月' | '71年6月至86年5月' | '86年5月以後'

    type QualitativeData = {
        seismicPerformanceLevel: SeismicPerformanceLevel | ''
        basementAreaRatio: number
        planSymmetry: SymmetryType | '' // 平面對稱性
        elevationSymmetry: SymmetryType | '' // 高程對稱性
        beamSpanToDepthRatioB: number
        columnHeightToDepthRatioC: number
        significanceOfWeakLayers: SignificanceType | ''
        detailAssessmentOfPlasticHingeZoneReinforcement: DetailAssessmentType | ''
        severityOfShortBeamCausedByWindowSillOrVentilation: SignificanceType | ''
        severityOfShortBeamCausedByWall: SignificanceType | ''
        extentOfDamageToColumn: SignificanceType | ''
        extentOfDamageToWall: SignificanceType | ''
        DegreeOfCracksCorrosionWaterSeepage: SignificanceType | ''
    }

    type OptionFactor = {
        [key: string]: number
    }

    type CustomScoreFunction = (value: number) => number

    type QualitativeField = {
        name: keyof QualitativeData
        label: string
        type: 'text' | 'number' | 'select' | 'date'
        options?: string[]
        score?: number
        factors?: OptionFactor
        customScoreFunction?: CustomScoreFunction
    }

    type QualitativeSection = {
        title: string
        fields: QualitativeField[]
    }
}
