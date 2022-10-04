const timer = s => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, s);
    })
}

const main = async () => {

    
    let flag = false
    
    setTimeout(() => {
        flag = true
    }, 5000);

    // 変数に特定の値が入るまでループして待つ
    while (!flag) {
        console.log('flagはfalse');
        await timer(100)
    }
    console.log('flagはtrue');

}

main()