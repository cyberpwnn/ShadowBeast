function patch(mode)
{
    var shaders = false;
    
    if(mode == "ultra|shaders")
    {
        shaders = true;
        mode = "ultra";
    }
    
    FS.copy("instance." + mode +".cfg", "instance.cfg");
    FS.copy(".minecraft/config/soundfilters." + mode + ".cfg", ".minecraft/config/soundfilters.cfg");
    FS.copy(".minecraft/config/mobdismemberment." + mode + ".cfg", ".minecraft/config/mobdismemberment.cfg");
    FS.copy(".minecraft/config/betterfoliage." + mode + ".cfg", ".minecraft/config/betterfoliage.cfg");
    FS.copy(".minecraft/config/chunkanimator." + mode + ".cfg", ".minecraft/config/chunkanimator.cfg");
    FS.copy(".minecraft/config/Weather2/Particle." + mode + ".cfg", ".minecraft/config/Weather2/Particle.cfg");
    FS.copy(".minecraft/config/astralsorcery." + mode + ".cfg", ".minecraft/config/astralsorcery.cfg");
    FS.copy(".minecraft/config/foamfix." + mode + ".cfg", ".minecraft/config/foamfix.cfg");
    FS.copy(".minecraft/optionsof." + mode + ".txt", ".minecraft/optionsof.txt");
    FS.copy(".minecraft/options." + mode + ".txt", ".minecraft/options.txt");
    FS.copy(".minecraft/config/itlt." + mode + ".cfg", ".minecraft/config/itlt.cfg");
    FS.copy(".minecraft/config/itlt/icon." + mode + ".png", ".minecraft/config/itlt/icon.png");
    FS.copy(".minecraft/config/smoothfont/smoothfont." + mode + ".cfg", ".minecraft/config/smoothfont/smoothfont.cfg");
    FS.copy(".minecraft/resources/assets/fml/textures/gui/forge." + mode + ".gif", ".minecraft/resources/assets/fml/textures/gui/forge.gif");
    FS.copy(".minecraft/resources/assets/fml/textures/gui/florb." + mode + ".gif", ".minecraft/resources/assets/fml/textures/gui/florb.gif");

    if(shaders)
    {
        FS.copy(".minecraft/optionsshaders.ultra.txt", ".minecraft/optionsshaders.txt");
    }

    else
    {
        FS.delete(".minecraft/optionsshaders.txt");
    }
}

patch(Fly.getParameter(0));