async function recognize(base64, lang, options) {
    const {config, utils} = options;
    const {run, cacheDir, pluginDir} = utils;
    let {backend} = config;

    let opt = [
        `${cacheDir}/pot_screenshot_cut.png`,
    ]
    if (backend != "1") {
        opt = [...opt, "-p dml"]
    }

    let result = await run(`${pluginDir}/MixTex-rs.exe`,
        opt);
    if (result.status === 0) {
        let out = result.stdout;


        return  out.trim()

    } else {
        throw Error(result.stderr);
    }
}