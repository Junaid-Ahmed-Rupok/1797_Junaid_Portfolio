



## *DeepEnMap*
## 2026

### • Python, TensorFlow,
### • Multi-Modal DL, Grad-CAM
Multi-Modal Ordinal Energy Poverty Risk Mapping. Fuses satellite imagery (CNN branch) with demographic data (dense branch) to predict ordinal energy poverty risk. A custom ordinal-aware loss penalizes distant misclassifications more heavily, reducing ordinal error from 0.1229 to 0.1201 versus cross-entropy. Reached 91.66% accuracy and 0.9102 macro F1; the demographic branch adds under 0.1% compute while improving accuracy by 5.7% over image-only. Grad-CAM explanations are aligned with the ordinal objective. Accepted at IEMIS 2026 (Springer LNNS).

Code: https://github.com/Junaid-Ahmed-Rupok/DeepEnMap
