import argostranslate.package as pkg

pkg.update_package_index()
pkgs = pkg.get_available_packages()

def install(a, b):
    p = next(x for x in pkgs if x.from_code == a and x.to_code == b)
    pkg.install_from_path(p.download())
    print("OK instalado:", a, "->", b)

install("es", "en")
install("en", "it")
