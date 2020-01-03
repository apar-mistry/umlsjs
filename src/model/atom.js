const AtomModel = {
    classType : String,
    ui : String,
    suppressible : Boolean,
    obsolete : Boolean,
    rootSource : String,
    termType : String,
    code : String,
    concept : String,
    sourceConcept : String,
    sourceDescriptor : String,
    attributes : String,
    parents : String,
    ancestors : any,
    children : String,
    descendants : any,
    relations : String,
    name : String,
    language : String,
    contentViewMemberships : [{
            memberUri : String,
            uri : String,
            name : String
        }
    ]
}
export default AtomModel