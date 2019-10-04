rem Do not touch
set MCVER=1.12.2
set JARFILE=minecraft_server.%MCVER%.jar
set LAUNCHWRAPPERVERSION=1.12
set LAUNCHWRAPPER=net\minecraft\launchwrapper\%LAUNCHWRAPPERVERSION%\launchwrapper-%LAUNCHWRAPPERVERSION%.jar
set FORGEJAR=1.12.2-14.23.5.2796-universal.jar

rem can be changed by user
set MAX_RAM=8G
set JAVA_PARAMETERS=-XX:+UseConcMarkSweepGC -XX:+CMSIncrementalMode  -XX:+CMSIncrementalPacing  -XX:NewRatio=16  -XX:SurvivorRatio=6  -XX:+AggressiveOpts  -XX:+UseStringDeduplication  -XX:+ExplicitGCInvokesConcurrent -XX:ParallelGCThreads=10 -Dfml.ignorePatchDiscrepancies=true  -Dfml.ignoreInvalidMinecraftCertificates=true  -XX:+UseFastAccessorMethods  -XX:+UseCompressedOops  -XX:+OptimizeStringConcat -XX:MaxTenuringThreshold=15 -XX:+UseAdaptiveGCBoundary -XX:+UseCodeCacheFlushing -XX:+CMSParallelRemarkEnabled -XX:+UseCMSInitiatingOccupancyOnly -XX:+CMSClassUnloadingEnabled
