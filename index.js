function superbowlWin(record){
    const found = record.find( element => element.result === "W");

    return !!found ? found.year : undefined
}
