const timer = s => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, s);
    })
}

const main = async () => {
    
    const startTime = new Date()
    const timerId = setInterval(() => {
        console.log(new Date() - startTime);
    }, 1000);

    let flag = false

    setTimeout(() => {
        // 5秒後にflagをtrue
        flag = true
        console.log('setTimeout ran');
    }, 5000);

    // flagがtrueになるまでループして待つ
    while (!flag) {
        console.log('flag is false');
        await timer(100)
    }
    console.log('flag is true');

    clearInterval(timerId)

}

main()