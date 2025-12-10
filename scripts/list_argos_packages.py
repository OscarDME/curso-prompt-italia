import argostranslate.package as pkg

pkg.update_package_index()
pkgs = pkg.get_available_packages()

# imprime los pares que involucren español o italiano
for p in pkgs:
    if p.from_code in ("es", "it") or p.to_code in ("es", "it"):
        print(p.from_code, "->", p.to_code, "|", p.package_version)
