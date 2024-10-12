First build dav1d lib:
meson setup build --cross-file=package/crossfiles/wasm64.meson -Ddefault_library=static

SIMD support:
meson setup build --cross-file=package/crossfiles/wasm64.simd.meson -Ddefault_library=static

Then cd dev1d/build & ninja