//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 138                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 * contributor: Silverbullet069                                             *
 * created: 2025-04-08                                                      *
 * version: FINAL                                                           *
 * license: MIT License                                                     *
 * updated: 2024-04-09                                                      *
 * history:                                                                 *
 * - (2024-04-07) Migrate from Native Firefox to Firefox Flatpak.           *
 * - (2025-03-09) Migrate from Firefox Flatpak to Fedora LibreWolf.         *
 *   - All changes are made direcly into about:config.                      *
 *   - Document the changed settings.                                       *
 * - (2025-04-09) Migrate from Fedora LibreWolf to LibreWolf Flatpak        *
 *    - All changes now are made and documented inside user.js              *
 *    - Disable `gfx.webrender.compositor.force-enabled` fix render bug     *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", false);

/** MEMORY CACHE **/
user_pref("browser.sessionhistory.max_total_viewers", 4);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.http.speculative-parallel-limit", 0); // If higher than 0, Firefox will setup background TCP connections to server, in prediction of the user using the page => don't have to wait the TCP + SSL handshake
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/** EXPERIMENTAL ***/
// user_pref("layout.css.grid-template-masonry-value.enabled", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("browser.privatebrowsing.resetPBM.enabled", true);
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("network.IDN_show_punycode", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("pdfjs.enableScripting", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** SAFE BROWSING ***/
// user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.use_geoclue", true); // def=false // NOTE: only allow Firefox to infer your location if `geo.provider.network.url` is a privacy-focus platform
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate"); // def=Mozilla's // NOTE: https://github.com/yokoffing/Betterfox/issues/378
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("extensions.getAddons.cache.enabled", false);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.usage.uploadEnabled", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** COOKIE BANNER HANDLING ***/
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("dom.text_fragments.create_text_fragment.enabled", true);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

/** FASTFOX ***/
user_pref("network.http.max-persistent-connections-per-proxy", 48); // def=32 // NOTE: Increase num. of connections to proxy server. Just enough will improve performance when accessing multiple resources through the same proxy server, especially on laggy connections
// Increase how many HTTP requests are sent at a time
//user_pref("network.http.pacing.requests.enabled", false); // WARN: highly experimental
//user_pref("network.http.pacing.requests.min-parallelism", 10); // WARN: highly experimental
//user_pref("network.http.pacing.requests.burst", 14); // WARN: highly experimental

//user_pref("browser.cache.disk_cache_ssl", false); // NOTE: disable SSL caching on disk
//user_pref("browser.cache.disk.capacity", 2048000); // def=256000 // NOTE: increase disk cache capacity (in KB) for better performance
//user_pref("browser.cache.disk.free_space_hard_limit", 2048); // def=1024 // NOTE: enforce free space checks when smart sizing is disabled
//user_pref("browser.cache.disk.free_space_soft_limit", 10240); // def=5120 // NOTE: enforce free space checks when smart sizing is disabled
//user_pref("browser.cache.disk.metadata_memory_limit", 500); // def=1024 // NOTE: increase cache memory pool
//user_pref("browser.cache.disk.smart_size.enabled", false); // def=true // NOTE: disable dynamic disk caching
//user_pref("browser.cache.memory.max_entry_size", 10240); // def=5120 // NOTE: set fixed memory allocation to replace disk cache
//user_pref("media.memory_caches_combined_limit_kb", 1048576); // def=524288 // TODO: add short description
//user_pref("media.memory_caches_combined_limit_pc_sysmem", 10); // def=5 // NOTE: Allow 10% of system memory to use for media caches
user_pref("browser.cache.frecency_half_life_hours", 12); // def=6 // NOTE: how long should (in hour) data be treated as old and get purged
user_pref("browser.cache.max_shutdown_io_lag", 16); // def=2 // NOTE: finish more IO on shutdown
user_pref("browser.cache.offline.enable", false); // def=HIDDEN PREF // NOTE: disable data caching when browser is offline

//user_pref("browser.tabs.unloadOnLowMemory", false); // WARN: "Auto Tab Discard" is a better alternative
//user_pref("browser.low_commit_space_threshold_mb", 200); // ERROR: DO NOT TOUCH THIS SETTING, IT WILL MAKE YOUR TAB FLICKERING
//user_pref("browser.low_commit_space_threshold_percent", 5); // ERROR: DO NOT TOUCH THIS SETTING, IT WILL MAKE YOUR TAB FLICKERING
//user_pref("browser.tabs.min_inactive_duration_before_unload", 600000); // ERROR: DO NOT TOUCH THIS SETTING, IT WILL MAKE YOUR TAB FLICKERING

user_pref("image.cache.size", 10485760); // def=5242880 // NOTE: increase image cache size. Cre: https://bugzilla.mozilla.org/show_bug.cgi?id=686151
//user_pref("image.mem.decode_bytes_at_a_time", 65536); // def=16384 // NOTE: instead of loading entire image into memory, it decodes byte-by-byte => memory efficient but slower
//user_pref("image.mem.shared.unmap.min_expiration_ms", 120000); // def=60000 // NOTE: minimum timeout (in seconds) to unmmap shared memory used for image decoding. It's said that only 32-bit builds of Firefox used this setting but I've seen it in 64-bit builds

//user_pref("gfx.canvas.accelerated.cache-size", 4096); // def=256 // NOTE: GPU-accelerated Canvas2D. Higher values will use more memory in exchange for performance
//user_pref("gfx.content.skia-font-cache-size", 80); // def = 5 // NOTE: GPU-accelerated Canvas2D. Higher values will use more memory in exchange for performance
user_pref("gfx.webrender.all", true); // def=false // disable hardware acceleration // TODO: test if the error message is gone
user_pref("gfx.webrender.compositor.force-enabled", false); // ERROR: DO NOT ENABLE IT, IT WILL MAKE YOUR TAB FLICKERING
user_pref("gfx.webrender.compositor", true); // def=false // TODO: add short description
user_pref("gfx.webrender.enabled", true); // def=false // TODO: add short description
user_pref("gfx.webrender.precache-shaders", true); // def=false // TODO: add short description
user_pref("gfx.webrender.program-binary-disk", true); // def=false // TODO: add short description
user_pref("gfx.webrender.software.opengl", true); // def=false // TODO: add short description

// Cre: https://ubuntuhandbook.org/index.php/2021/08/enable-hardware-video-acceleration-va-api-for-firefox-in-ubuntu-20-04-18-04-higher/
user_pref("media.ffvpx.enabled", false); // def=HIDDEN PREF // Disable internal software decoders for VP8/VP9, which currently overrule hardware accelerated video // WARN: might break Google Translate audio https://www.reddit.com/r/firefox/comments/1azp6ez/firefox_123_no_sound_problem_with_decodeaudiodata/
//user_pref("media.rdd-vpx.enabled", false); // def=true // NOTE: If true, FF trying to put some video decoding in a remote video process, therefore breaks accelerated VP8/VP9 video decoding. If false, VA-API will run in the content process
//user_pref("media.navigator.mediadatadecoder_vpx_enabled", true); // def=true // NOTE: enable VA-API for WebRTC that web based video conferencing app used
user_pref("widget.wayland-dmabuf-vaapi.enabled", true); // def=HIDDEN PREF // NOTE: turn on VA-API for desktop environment baed on Wayland
user_pref("widget.wayland-dmabuf-webgl.enabled", true); // def=HIDDEN PREF // NOTE: turn on FFmpegDataDecoder. For display server based on Wayland

user_pref("layers.gpu-process.enabled", true); // def=false // WARN: at best, it does nothing on Linux/MacOS
user_pref("layers.gpu-process.force-enabled", true); // def=false // WARN: at best, it does nothing on Linux/MacOS, also force enabled could lead to breakage
user_pref("layers.mlgpu.enabled", true); // def=HIDDEN PREF // WARN: at best, it does nothing on Linux/MacOS
user_pref("media.hardware-video-decoding.enabled", true); // def=true // WARN: at best, it does nothing on Linux/MacOS
user_pref("media.hardware-video-decoding.force-enabled", false); // def=false // WARN: at best, it does nothing on Linux/MacOS, also force enabled could lead to breakage
user_pref("media.gpu-process-decoder", true); // def=true [WINDOWS] // WARN: at best, it does nothing on Linux/MacOS
user_pref("media.ffmpeg.vaapi.enabled", true); // def=HIDDEN PREF // WARN: at best, it does nothing on Linux/MacOS
user_pref("layers.acceleration.disabled", false); // def=false // enable hardware acceleration
user_pref("layers.acceleration.force-enabled", true); // def=false // ERROR: It's proven to use GPU to render. If not force enabled, Flatpak will be very slow!

user_pref("network.dnsCacheEntries", 20000); // def=400 // NOTE: more cache entries means faster connection
//user_pref("network.dnsCacheExpiration", 3600); // def=60 // NOTE: cache lives longer means minimize re-caching
user_pref("network.dnsCacheExpirationGracePeriod", 240); // def=60 // NOTE: after cache expired, it got a second chance
//user_pref("network.ssl_tokens_cache_capacity", 10240); // def=2048 // NOTE: more TLS token caching means faster reconnections
user_pref("network.trr.max-fails", 5); // def=15 // NOTE: fail fast means fallback to system DNS much quicker
//user_pref("browser.cache.jsbc_compression_level", 0); // def=0=No compression // NOTE: defines compression level for cached JavaScript bytecode, no compression means no cache
//user_pref("gfx.webrender.super-resolution.nvidia", true); // NOTE: Enable NVIDIA RTX Video Super Resolution. only works with NVIDIA GPU
//user_pref("toolkit.winRegisterApplicationRestart", true); // def=HIDDEN PREF [WINDOWS], false [LINUX] // NOTE: automatic Firefox start and session restore after reboot

/** SECUREFOX ***/
//user_pref("privacy.antitracking.enableWebcompat", true); // def=true // TODO: add short description
//user_pref("privacy.restrict3rdpartystorage.rollout.enabledByDefault", true); // NOTE: Might only existed in Beta. Total Cookie Protection contains cookies to the site you"re on, so trackers can't use them to follow you between sites.
user_pref("accessibility.force_disabled", 1); // WARN: might break physical imparment assistive software
user_pref("browser.contentblocking.introCount", 20); // def=HIDDEN PREF // NOTE: turn off Content Blocker Notification. Cre: https://support.mozilla.org/en-US/questions/1239183
user_pref("browser.pagethumbnails.capturing_disabled", true); // def=HIDDEN PREF // NOTE: disable page thumbnail collection
//user_pref("devtools.debugger.remote-enabled", true); // NOTE: it seems the browser force disable it since this is a session-only setting by design
user_pref("browser.search.suggest.enabled", true); // I still like this feature thank you very much
user_pref("browser.urlbar.quicksuggest.enabled", true); // I still like this feature thank you very much
user_pref("browser.urlbar.groupLabels.enabled", true); // TODO: add short description
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown"); // NOTE: limit events that can cause a pop-up
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true); // NOTE: Warn me before loading sites that don't support HTTPS when using Private Browsing windows
user_pref("dom.security.https_only_mode_pbm", true); // NOTE: Enable HTTPS-Only mode in all Private Browsing mode
user_pref("javascript.options.wasm", false); // WARN: might break online coding platforms, PWA, ...
user_pref("media.peerconnection.ice.no_host", true); // protect your private IP even in TRUSTED scenarios after granting device access. // WARN: might break video-conferencing platforms
user_pref("network.http.referer.XOriginPolicy", 1); // 0=alawys (def), 1=only if base domains match (chosen), 2=only if hosts match. // WARN: control when to send a cross-origin referer, might cause breakage if 1 or 2 is chosen
user_pref("permissions.memory_only", false); // def=HIDDEN // CAUTION: if not specified or set to true, LibreWolf won't persist permissions after restart, and Cookies exception list is actually a permission list => exceptions aren't persisted either
user_pref("privacy.resistFingerprinting.letterboxing", false); // def=false // ERROR: UI cropped, not worth it so it must stay disabled
user_pref("privacy.resistFingerprinting.pbmode", true); // enable RFP in Private Browsing
user_pref("privacy.spoof_english", 2); // enabled RFP spoof english prompt
user_pref("security.nocertdb", true); // disable intermediate certificate caching
user_pref("security.OCSP.require", false); // ERROR: OCSP's servers are often down, this lead to connection blocked
user_pref("webgl.disabled", true); // WARN: might break video-conferencing platforms
user_pref("widget.non-native-theme.use-theme-accent", false); // disable using system accent colors

user_pref("network.trr.mode", 2); // 2=Increased Protection, 3=Max Protection // NOTE: chose 2 to minimize breakage
user_pref("network.trr.uri", "https://1.1.1.1/dns-query"); // WARN: DO NOT USE https://mozilla.cloudflare-dns.com/dns-query, Mozilla might sell your data
user_pref("network.trr.custom_uri", "https://1.1.1.1/dns-query"); // WARN: DO NOT USE https://mozilla.cloudflare-dns.com/dns-query, Mozilla might sell your data
user_pref("network.trr.bootstrapAddr", "1.1.1.1"); // ERROR: the DNS bootstrap IP must match the IP of your custom DNS server, set at `network.trr.uri`

user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false); // ERROR: DO NOT DELETE browsing history and downloads on shutdown
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false); // ERROR: DO NOT DELETE cookies and site data
user_pref("privacy.clearOnShutdown_v2.formdata", true); // WARN: delete form data on shutdown
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); // WARN: delete history form data and downloads on shutdown
// user_pref("privacy.clearOnShutdown.offlineApps", false); // TODO: add short description

// Enable Google Safe Browsing
// Cre: https://librewolf.net/docs/settings/#enable-google-safe-browsing
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.safebrowsing.blockedURIs.enabled", true);
user_pref(
  "browser.safebrowsing.provider.google4.gethashURL",
  "https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST"
);
user_pref(
  "browser.safebrowsing.provider.google4.updateURL",
  "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST"
);
user_pref(
  "browser.safebrowsing.provider.google.gethashURL",
  "https://safebrowsing.google.com/safebrowsing/gethash?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2"
);
user_pref(
  "browser.safebrowsing.provider.google.updateURL",
  "https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2&key=%GOOGLE_SAFEBROWSING_API_KEY%"
);

// Isolating different website processes from each other
// Prevent malicious websites from access sensitive information from other websites but uses LOADS of memory to do,

// OPTION 1: isolate all websites
// Web content is always isolated intro its own `webIsolated` content process based on site-origin, and will only load in a shared web content process if site-origin could not be determined
// user_pref("fission.autostart", true); // (*)
// user_pref("fission.webContentIsolationStrategy", 1);

// Firefox Quantum (2017), CPU cores = processCount.
// However, since the introduction of Fission, the number of website processes is controlled by `dom.ipc.processCount.webIsolated`
// Disable `fission.autostart` or changing `fission.webContentIsolationStrategy` reverts control back to processCount.
// user_pref("dom.ipc.processCount", 1);
// user_pref("dom.ipc.processCount.webIsolated", 1);
// user_pref("dom.ipc.processPrelaunch.fission.number", 1); // Use one process for process preallocation cache

// [CHOSEN]
// OPTION 2: isolate only "high value" websites
// Only isolates web content loaded by sites which are considered "high value", a site is considered high value if it has been granted a `highValue* permission by the permission manager, which is done in response to certain action
user_pref("fission.webContentIsolationStrategy", 2);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("dom.ipc.processCount.webIsolated", 1); // one process per site origin (high value)
user_pref("dom.ipc.processCount", 8); // determine by number of CPU cores/processors

// OPTION 3: do not isolate websites
// All web content is loaded into a shared `web` content process. This is similar to non-Fission behavior
//user_pref("fission.webContentIsolationStrategy", 0);
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
//user_pref("dom.ipc.processCount", 8); // determine by number of CPU cores/processors

//user_pref("security.sandbox.gpu.level", 0); // def=0 // NOTE: GPU sandboxing, reserve for future support
//user_pref("security.sandbox.content.level", 0); // def=4 // NOTE: set to 0 if experiencing page crash

/** PESKYFOX ***/
user_pref(
  "browser.startup.homepage",
  "https://github.com/users/Silverbullet069/projects/1"
); //  The first thing I want to see is my Kanban board
//user_pref("accessibility.typeaheadfind", false); // disable searching for text when start typing. NOTE: if on it could overwrite site-specific keyboard shortcut
//user_pref("browser.chrome.site_icons", true); // DO NOT DISABLE if you want to lose favicons in history, bookmarks AND TAB BAR
//user_pref("browser.menu.showViewImageInfo", true); // turn on "View Image Info" when right-click an image
//user_pref("browser.preferences.experimental", true); // turn on "Firefox Experiments" settings page
//user_pref("browser.preferences.moreFromMozilla", false);
//user_pref("browser.uitour.enabled", false); // disable UITour backend, no chance that a remote page can use it
//user_pref("browser.urlbar.suggest.calculator", true); // enable FF built-in calculator
//user_pref("permissions.default.desktop-notification", 2); // block new requests asking to allow notifications
//user_pref("prompts.defaultModalType", 3); // set prompts to be Window Modal
user_pref("browser.bookmarks.showMobileBookmarks", false); // declutter bookmarks folder
user_pref("browser.download.always_ask_before_handling_new_types", false); // disable UI for security by always asking how to handle new mimetypes
user_pref("browser.download.alwaysOpenPanel", true); // open downloads panel opening on every download
user_pref("browser.download.lastDir.savePerSite", true); // enable saving the last download directory for each website separately
user_pref("browser.download.useDownloadDir", false); // always ask you where to save files
user_pref("browser.eme.ui.enabled", false); // hide the UI setting; this also disables the DRM prompt (optional)
user_pref("browser.engagement.total_uri_count.pbm", false); // turn off counting URIs in private browsing mode
user_pref("browser.library.activity-stream.enabled", false); // turn off Library Highlights
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // turn off Snippets (Updates from Mozilla and Firefox)
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true); // enable Top Sites in New Tab
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2); // show Top Sites in 2 rows
user_pref("browser.newtabpage.activity-stream.showWeather", false); // disable Weather Forecast
user_pref("browser.search.suggest.enabled.private", true); // only enable if you are using a privacy-respecting search engine (e.g. DuckDuckGo)
user_pref("browser.sessionstore.max_tabs_undo", 25); // set number of saved closed tabs
user_pref("browser.sessionstore.max_tabs_undo", 50); // set the amount of "Undo Closed Tabs" in Session Restore
user_pref("browser.startup.page", 3); // 3=resume previous session
user_pref("browser.tabs.closeWindowWithLastTab", true); // close the last tab close the browser
user_pref("browser.tabs.extraDragSpace", true); // show Drag Space if you have removed titlebar
user_pref("browser.tabs.firefox-view", false); // remove "Firefox View" icon from toolbar, best practice is to leave it when you want to view a website on PC but is currently opened in phone, def=HIDDEN PREF
user_pref("browser.tabs.inTitlebar", 2); // hide Title Bar, 0=Show, 2=Hide
user_pref("browser.tabs.loadBookmarksInBackground", true); // when you opened a bookmark tab, it won't jump into that tab straight away
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // disable middle click on new tab button opening URLs or searches using clipboard
user_pref("browser.toolbars.bookmarks.visibility", "always"); // always display Bookmark Toolbar
user_pref("browser.uidensity", 1); // 0=normal mode, 1=compact mode (smallest), 2=touch mode (too large)
user_pref("browser.uitour.url", ""); // disable UITour backend, no chance that a remote page can use it
user_pref("browser.urlbar.maxRichResults", 10); // minimize the # of search result on Address Bar
user_pref("browser.urlbar.suggest.yelp", false); // why Yelp?
user_pref("browser.urlbar.suggest.pocket", false); // no Pocket
user_pref("browser.urlbar.yelp.featureGate", false); // disable urlbar suggestion for Yelp
user_pref("clipboard.autocopy", false); // disable middle click paste (1)
user_pref("cookiebanners.service.mode", 0); // 0=disable, 1=reject all, 2=reject all or fallback to accept all. // I choose 0 since uBlock Origins had this feature. But if you choose 1 or 2, read https://github.com/mozilla/cookie-banner-rules-list
user_pref("cookiebanners.service.mode.privateBrowsing", 0); // 0=disable, 1=reject all, 2=reject all or fallback to accept all. // I choose 0 since uBlock Origins had this feature. But if you choose 1 or 2, read https://github.com/mozilla/cookie-banner-rules-list
//user_pref("cookiebanners.bannerClicking.enabled", true);
//user_pref("cookiebanners.cookieInjector.enabled", true);
user_pref("devtools.accessibility.enabled", false); // removes un-needed "Inspect Accessibility Properties" on right-click
user_pref("devtools.debugger.prompt-connection", false); // hide popup dialog when opening Browser Toolbox
user_pref("devtools.toolbox.zoomValue", 1); // change default DevTools zoom level
user_pref("extensions.allowPrivateBrowsingByDefault", true); // allow ALL extensions to run in Private Browsing
user_pref("identity.fxaccounts.enabled", false); // disable Firefox Sync
user_pref("middlemouse.paste", false); // disable middle click paste (2)
user_pref("services.sync.prefs.sync.browser.uiCustomization.state", true); // turn on UI customizations sync
user_pref("signon.rememberSignons", false); // unselect "Privacy & Security > Passwords > Ask to save passwords" // NOTE: replaced by Bitwarden
user_pref("signon.autofillForms", false); // select "Privacy & Security > Passwords > Fill usernames and password automatically" // NOTE: replaced by Bitwarden
user_pref("signon.generation.enabled", false); // unselect "Privacy & Security > Passwords > Suggest and generate strong passwords" // NOTE: replaced by Bitwarden
user_pref("signon.firefoxRelay.feature", ""); // unselect suggestions from Firefox Relay
user_pref("ui.key.menuAccessKey", 0); // 0=disable, 17=ctrl, 18=alt, 91=win, 224=meta (Command key on Mac)
user_pref("ui.key.menuAccessKeyFocuses", false); // disable Alt key

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

// recommended for 60hz+ displays
//user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
//user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y", 275); // 250-400; adjust this number to your liking

/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/
