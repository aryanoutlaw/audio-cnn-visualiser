# 🎵 Audio CNN Visualizer

An interactive web application that visualizes how Convolutional Neural Networks classify audio using the ESC-50 dataset. Upload audio files to see real-time predictions and explore the internal feature maps of each layer.

![Audio CNN Visualizer](https://img.shields.io/badge/Status-Active-brightgreen)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![PyTorch](https://img.shields.io/badge/PyTorch-Latest-red)

## ✨ Features

- **🎯 Audio Classification**: Upload WAV files for real-time classification into 50 environmental sound categories
- **🧠 Neural Network Visualization**: Interactive visualization of CNN feature maps and layer activations
- **📊 Confidence Scores**: View top predictions with confidence percentages
- **🎨 Spectrogram Display**: Visualize input audio as mel-spectrograms
- **📱 Responsive UI**: Modern, clean interface built with Next.js and Tailwind CSS
- **⚡ Real-time Processing**: Fast inference using optimized PyTorch models

## 🏗️ Tech Stack

### Backend (ML/API)
- **PyTorch**: Deep learning framework for CNN model
- **torchaudio**: Audio processing and spectrogram generation
- **Modal**: Cloud deployment platform for ML inference
- **NumPy**: Numerical computations
- **Python 3.8+**: Core backend language

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Modern UI component library
- **Recharts**: Data visualization for waveforms

### Dataset & Model
- **ESC-50 Dataset**: Environmental Sound Classification with 50 classes
- **Custom CNN Architecture**: Multi-layer convolutional neural network
- **Mel-Spectrogram Input**: Audio converted to frequency domain representation

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 18+
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/aryanoutlaw/audio-cnn-visualiser.git
cd audio-cnn-visualiser
```

### 2. Backend Setup
```bash
# Install Python dependencies
pip install -r requirements.txt

# Train the model (optional - pre-trained model included)
python train.py

# Test local inference
python main.py
```

### 3. Frontend Setup
```bash
cd audio-cnn-frontend

# Install dependencies
npm install

# Create environment file
echo "NEXT_PUBLIC_INFERENCE_URL=your-api-url-here" > .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
audio-cnn-visualiser/
├── README.md                   # Project documentation
├── requirements.txt            # Python dependencies
├── model.py                   # CNN architecture definition
├── train.py                   # Model training script
├── main.py                    # Inference script
├── best_model.pth            # Pre-trained model weights
├── chirpingbirds.wav         # Sample audio file
└── audio-cnn-frontend/       # Next.js frontend application
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx     # Root layout
    │   │   └── page.tsx       # Main application page
    │   └── components/ui/     # Reusable UI components
    │       ├── Waveform.tsx   # Audio waveform visualization
    │       ├── FeatureMap.tsx # CNN layer visualization
    │       ├── ColorScale.tsx # Color legend for heatmaps
    │       └── ...           # Other UI components
    ├── package.json
    └── next.config.js
```

## 🎯 ESC-50 Sound Classes

The model can classify 50 different environmental sounds including:

**Animals**: Dog, Cat, Pig, Cow, Frog, Crickets, Chirping Birds, Hen, Insects, Sheep, Rooster, Crow

**Natural**: Rain, Sea Waves, Crackling Fire, Thunderstorm, Wind, Water Drops, Pouring Water

**Human**: Crying Baby, Sneezing, Clapping, Coughing, Footsteps, Breathing, Laughing, Brushing Teeth, Snoring, Drinking/Sipping

**Urban**: Door Wood Knock, Helicopter, Car Horn, Siren, Engine, Train, Airplane, Church Bells, Clock Alarm, Clock Tick, Fireworks

**Domestic**: Mouse Click, Keyboard Typing, Can Opening, Washing Machine, Vacuum Cleaner, Toilet Flush, Glass Breaking, Hand Saw, Chainsaw

## 🌐 Deployment

### Deploy Frontend to Vercel

```bash
cd audio-cnn-frontend

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable in Vercel dashboard:
# NEXT_PUBLIC_INFERENCE_URL = your-modal-api-url
```

### Deploy Backend to Modal

The backend is designed to run on Modal for scalable ML inference. Update the Modal deployment configuration in your inference script.

## 🔧 Model Architecture

The CNN architecture includes:
- **Input**: Mel-spectrogram (128 x 128)
- **Conv Layers**: Multiple convolutional layers with ReLU activation
- **Pooling**: Max pooling for dimensionality reduction
- **Feature Maps**: Visualizable intermediate representations
- **Output**: 50-class classification with softmax

## 📊 Performance

- **Accuracy**: ~85% on ESC-50 test set
- **Inference Time**: <200ms per audio file
- **Supported Formats**: WAV files (16kHz recommended)
- **Max Duration**: 5 seconds per clip

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [ESC-50 Dataset](https://github.com/karoldvl/ESC-50) for environmental sound classification
- [Modal](https://modal.com) for ML model deployment
- [Shadcn/ui](https://ui.shadcn.com) for beautiful UI components

## 📞 Contact

Created by [@aryanoutlaw](https://github.com/aryanoutlaw) - feel free to reach out!

---

⭐ Star this repository if you found it helpful! 