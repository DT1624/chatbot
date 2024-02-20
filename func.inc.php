<?php
function vidPerPage($conn, $page)
{
    $sql = "SELECT * FROM podcast";
    $result = $conn->query($sql);

    $vidsPerPage = 6;
    $totalVids = $result->num_rows;
    $totalPages = ceil($totalVids / $vidsPerPage);
    $startIndex = ($page - 1) * $vidsPerPage;
    $sql .= " LIMIT $startIndex, $vidsPerPage";
    $result = $conn->query($sql);

    echo "
    <div class='col-lg-12'>
        <div class='row grid'>
    ";
    while ($row = $result->fetch_assoc()) {
        echo "
                <div class='" . $row['class'] . "'>
                    <div class='meeting-item'>
                        <div class='thumb'>
                            <div class='price'>
                                <span>" . $row['topic'] . "</span>
                            </div>
                            <a href='" . $row['link'] . "'>
                                <img src='" . $row['image'] . "' alt='Online Teaching'>
                            </a>
                        </div>
                        <div class='down-content'>
                            <a href='" . $row['link'] . "'>
                                <h4>" . $row['content'] . "</h4>
                            </a>
                        </div>
                    </div>
                </div>
            
        <br>";
    }
    echo "
        </div>
    </div>
    <div class='col-lg-12' href='#meetings'>
        <div class='pagination'>
            <ul>
    ";
    if ($page > 1) {
        echo "
        <li><a href='podcast.php?&page=" . max(1, $page - 1) . "'<i class='fa fa-angle-left'></i></a></li>
        ";
    }

    for ($i = max(1, $page - 2); $i <= min(max(1, $page - 2) + 5, $totalPages); $i++) {
        if ($i == $page) {
            echo "
                <li class='active'><a href='podcast.php?page=" . $i . "'>" . $i . "</a></li>";
        } else {
            echo "
                <li><a href='podcast.php?page=" . $i . "'>" . $i . "</a></li>";
        }
    }
    if ($page < $totalPages) {
        echo "
            <li><a href='podcast.php?page=" . min($page + 1, $totalPages) . "'><i class='fa fa-angle-right'></i></a></li>
        ";
    }
    echo "      
            </ul>
        </div>
    </div>";
}
