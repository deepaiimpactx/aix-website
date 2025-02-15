import xml.etree.ElementTree as ET

def replace_fill_color(svg_file, output_file, new_color="#818CF8"):
    # Register the default namespace to avoid "ns0" prefixes
    ET.register_namespace("", "http://www.w3.org/2000/svg")

    # Parse the SVG file
    tree = ET.parse(svg_file)
    root = tree.getroot()

    # Replace all fill attributes
    for elem in root.iter():
        if "fill" in elem.attrib:
            elem.set("fill", new_color)

    # Write the modified SVG back to file
    tree.write(output_file, encoding="utf-8", xml_declaration=True)

# Usage
replace_fill_color("comsnets.svg", "comsnets-p.svg")
