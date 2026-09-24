package com.example.steppulsev2

import android.content.Context
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            // Using standard MaterialTheme to avoid "Unresolved reference" errors
            MaterialTheme {
                StepCounterApp()
            }
        }
    }
}

@Composable
fun StepCounterApp() {
    val context = LocalContext.current
    val prefs = remember { context.getSharedPreferences("StepPrefs", Context.MODE_PRIVATE) }





    // State variables
    var steps by remember { mutableIntStateOf(0) }

    var isRunning by remember { mutableStateOf(false) }
    var speed by remember { mutableFloatStateOf(1f) }

    // Check for daily reset or load saved data
    LaunchedEffect(Unit) {
        val savedDate = prefs.getString("DATE", "")
        val today = SimpleDateFormat("yyyyMMdd", Locale.getDefault()).format(Date())

        if (savedDate != today) {
            steps = 0
            prefs.edit().putString("DATE", today).putInt("STEPS", 0).apply()

        } else {
            steps = prefs.getInt("STEPS", 0)
        }
    }

    // Counter logic
    LaunchedEffect(isRunning, speed) {
        if (isRunning && speed > 0) {
            while (true) {
                delay((1000 / speed).toLong())
                steps++
                prefs.edit().putInt("STEPS", steps).apply()

            }
        }
    }

    // UI Layout
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "$steps / 3000",
            fontSize = 48.sp,
            fontWeight = FontWeight.Bold
        )

        Spacer(modifier = Modifier.height(30.dp))

        Button(
            onClick = { isRunning = !isRunning },
            modifier = Modifier
                .fillMaxWidth(0.6f)
                .height(60.dp)
        ) {
            Text(
                text = if (isRunning) "Pause" else "Start",
                fontSize = 20.sp
            )
        }

        Spacer(modifier = Modifier.height(50.dp))

        Text(text = "Speed: ${speed.toInt()} steps/sec")

        Slider(
            value = speed,
            onValueChange = { speed = it },
            valueRange = 0f..50f,
            modifier = Modifier.fillMaxWidth()
        )
    }
}
