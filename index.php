<?php include 'src/inc/header.php' ?>

<main>
    <div class="mainContainer">
        <div class="windows">
            <?php
            // Récupérer l'étape courante à partir de l'URL, ou utiliser 'step00_' par défaut
            $currentStep = isset($_GET['step']) ? $_GET['step'] : 'step00_';
            // Inclure le fichier PHP correspondant à l'étape courante
            include "src/inc/step/{$currentStep}.php";
            ?>
        </div>
        <div class="step-loader">
            <!-- Génération dynamique des boutons pour chaque phase -->
            <?php for ($i = 0; $i <= 10; $i++): ?>
                <button onclick="window.location.href='?step=step<?= str_pad($i, 2, "0", STR_PAD_LEFT) ?>_'">Phase <?= $i ?></button>
            <?php endfor; ?>
        </div>
    </div>
</main>
<script src="script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<!-- Inclusion de JS Bootstrap et ses dépendances -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<?php include 'src/inc/footer.php' ?>
