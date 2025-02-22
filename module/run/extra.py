
def process_domains(file_path):
    processed_domains = set()    
    output_lines = []
    output_lines.append(f"#!name=Block Ads VN")
    output_lines.append(f"#!desc=Ads Block Hosts")
    output_lines.append(f"")
    output_lines.append(f"#!url=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/module/adblockvn.module")
    output_lines.append(f"")
    output_lines.append(f"[Rule]")
    with open(file_path, "r", encoding="utf-8") as f:
        lines = sorted({line.strip() for line in f.readlines() if not line.startswith("#")})
        last_initial = None
        for line in lines:
            line = line.strip()
            if line and not line.startswith("#"):
                initial = line[0].upper()
                if initial != last_initial:
                    output_lines.append(f"# {initial}")
                    last_initial = initial
                output_lines.append(f"DOMAIN-SUFFIX,{line},REJECT")
       
    return "\n".join(output_lines)

# Đọc nội dung từ file đầu vào
input_file = "extra.txt" 
output_file = "..//adblockvn.module"

output_text = process_domains(input_file)
with open(output_file, "w", encoding="utf-8") as f:
    f.write(output_text)



print(f"Xử lý hoàn tất! Kiểm tra file {output_file}.")
