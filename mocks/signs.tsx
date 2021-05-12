let signs : any = {
    '1222-0120':'Capricórnio',
    '0121-0218':'Aquário',
    '0219-0320':'Peixes',
    '0321-0420':'Áries',
    '0421-0520':'Touro',
    '0521-0620':'Gêmeos',
    '0621-0722':'Câncer',
    '0723-0822':'Leão',
    '0823-0922':'Virgem',
    '0923-1022':'Libra',
    '1023-1121':'Escorpião',
    '1122-1221':'Sagitário',
}

const verifySigns = (month:string, day: string):any => {
    let key = parseInt(month+day)
    let yourSign = ''
    Object.keys(signs).forEach((sign:string) => {
        let rangeDate = sign.split('-')
        const start = parseInt(rangeDate[0])
        const end = parseInt(rangeDate[1])
        if ( start === 1222 ? end >= key : start <= key && end >= key) {
            yourSign =  signs[sign]
        }
    })
    return yourSign
}

const descriptionSign = (sign:string) : string => {
    const description : { [key: string]: string; } = {
        'Capricórnio':'O capricorniano pode até parecer uma fechado e meio antipático, porém, ele só é tímido e muito trabalhador. Mas eles se abrem com o tempo, se provando amigos leais e confiáveis.',
        'Aquário':'O aquariano é um ser independente, que preza muito por sua liberdade. Ele gosta de conhecer coisas novas, como também pessoas novas. Além disso, ele clama por tudo aquilo que é novo em sua vida.',
        'Peixes':'Peixes é o signo mais romântico do zodíaco, sendo um grande sonhador e zelador dos sonhos daquela pessoa que tanto ama. Ele meio que tem uma queda por conto de fadas e acredita que todo mundo merece ser feliz.',
        'Áries':'Os arianos são definidos por sua força, impulsividade e impetuosidade. Ele não reflete ou pensa antes de agir. Porém, são ousados e não possuem medo de serem pioneiros, agindo sempre a frente dos outros signos. Não se engane, essa fera possui um bom coração.',
        'Touro':'Os taurinos são muito teimosos e, mais do que isso, eles são muito ciumentos e protetores. Eles gostam mesmo de comida? Sim? Eles são leais? Também. Além disso, eles precisam de estabilidade para serem felizes.',
        'Gêmeos':'Um dos signos mais imprevisíveis do zodíaco, é o de gêmeos. Na verdade, você nunca sabe o que pode esperar deles. Eles são um pouco pavio curto, porém, gostam de viver grandes aventuras e cultivam um bom humor nato.',
        'Câncer':'Os cancerianos são muito sensíveis e emotivos, por isso, dão muito valor a intimidade e ao carinho. São caseiros por natureza e tem como epicentro a família. Eles fazem amizade com muita facilidade, porém, eles são bastante instáveis.',
        'Leão':'Os leoninos gostam de chamar a atenção mesmo, pois eles vieram para tomar o lugar que é deles “por direito”. Apesar de ser muito comunicativo e aberto, eles possuem muita insegurança. Além disso, eles sabem ser amáveis e muito leais.',
        'Virgem':'O virginiano é um signo que nasceu para o sucesso, e ele fará de tudo para conquistar tudo aquilo que deseja. Eles costumam ser rígidos com eles mesmos e com quem está a sua volta, cobrando muito. Mas não se engane, eles são muito tímidos.',
        'Libra':'O libriano evita conflito o máximo que pode, buscando sempre a imparcialidade quando se mete em um debate. Eles possuem uma dificuldade muito grande de conseguir fazer escolhas. Uma coisa é certa para essa galera, eles são atraídos naturalmente para tudo aquilo que é harmônico.',
        'Escorpião':'O escorpião é o signo mais determinado do zodíaco, indo até as última consequências para alcançar aquilo que deseja. Além disso, eles são muito sexuais e românticos. preferem estar com alguém fixo do que com várias pessoas ao mesmo tempo.',
        'Sagitário':'Os sagitarianos são pessoas que estão sempre com um sorriso no rosto, buscando o que a de melhor na vida. Eles são muito sonhadores e estão sempre em busca de conhecer pessoas novas. Além disso, eles adoram cultivar amigos.',
    }
    return description[sign]
}

export { verifySigns, descriptionSign }